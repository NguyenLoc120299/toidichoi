import React from 'react'
import { Form } from '@chakra-ui/react'
const FormComment = () => {

    return (

        <Form>
            <Field>
                <FormControl >
                    <Input {...field} id='name' placeholder='name' />
                </FormControl>
            </Field>
            <Button
                mt={4}
                colorScheme='teal'
                type='submit'
            >
                Submit
            </Button>
        </Form>
    )
}

export default FormComment