"use server"
import { GraphQLClientSingleton } from "@/graphql"
import { createUserMutation } from "@/graphql/mutations/createUserMutation"
import {createAccessToken} from "@/utils/auth/createAccessToken";
import {redirect} from "next/navigation";
import {validateAccessToken} from "@/utils/auth/validateAccessToken";
import {cookies} from "next/headers";
import {createCartMutation} from "@/graphql/mutations/createCartMutation";

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

export const handleCreateCart = async (items: CartItem[]) => {
    const cookiesStore = cookies()
    const accessToken = cookiesStore.get('accessToken')?.value as string

    if(!accessToken) redirect('/login')

    const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
    const customer = await validateAccessToken()
    const variables = {
        input: {
            buyerIdentity: {
                customerAccessToken: accessToken,
                email: customer?.email
            },
            lines: items.map(item => ({
                merchandiseId: item.merchandiseId,
                quantity: item.quantity
            }))
        }
    }

    const { cartCreate }: {
        cartCreate?: {
            cart?: {
                checkoutUrl: string
            }
        }
    } = await graphqlClient.request(createCartMutation, variables)

    return cartCreate?.cart?.checkoutUrl
}
