"use server"
import { GraphQLClientSingleton } from "@/graphql"
import { createUserMutation } from "@/graphql/mutations/createUserMutation"

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
    console.log(customer)
    console.log(customerUserErrors)
}
