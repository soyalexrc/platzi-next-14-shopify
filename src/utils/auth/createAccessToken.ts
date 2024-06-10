import {GraphQLClientSingleton} from "@/graphql";
import {customerAccessTokenCreateMutation} from "@/graphql/mutations/customerAccessTokenCreate";
import {cookies} from "next/headers";

export const createAccessToken = async (email: string, password: string) => {
    const cookiesStore = cookies();
    const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
    const { customerAccessTokenCreate }: {customerAccessTokenCreate: any} = await graphqlClient.request(customerAccessTokenCreateMutation, {
        "email": email,
        "password": password,
    })

    const { accessToken, expiresAt } = customerAccessTokenCreate.customerAccessToken;

    if (accessToken) {
        cookiesStore.set("accessToken", accessToken, {
            path: '/',
            expires: new Date(expiresAt),
            httpOnly: true,
            sameSite: 'strict'
        })
    }
}
