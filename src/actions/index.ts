"use server"
import { GraphQLClientSingleton } from "@/graphql"
import { createUserMutation } from "@/graphql/mutations/createUserMutation"
import {createAccessToken} from "@/utils/auth/createAccessToken";
import {redirect} from "next/navigation";

export const handleCreateUser = async (formData: FormData) => {
    const formDataObject = Object.fromEntries(formData)
    delete formDataObject["password_confirmation"]
    const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
    const variables = {
        input: {
            ...formDataObject,
            phone: '+51' + formDataObject.phone
        }
    }

    const { customerCreate }: { customerCreate: any} = await graphqlClient.request(createUserMutation, variables)
    const { customerUserErrors, customer } = customerCreate

    if (customer?.firstName) {
        await createAccessToken(formDataObject.email as string, formDataObject.password as string);
        redirect('/store');
    }

}

export const handleLogin = async (formData: FormData) => {
    const formDataObject = Object.fromEntries(formData)
    const accessToken: any  = await createAccessToken(formDataObject.email as string, formDataObject.password as string)
    if(accessToken){
        redirect('/store')
    }
}
