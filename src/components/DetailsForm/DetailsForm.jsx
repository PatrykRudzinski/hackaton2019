import React from 'react';
import {Form, Input} from "antd";
import ButtonLarge from "../../components/ButtonLarge";

const {TextArea} = Input;
const {Item} = Form;

const DetailsForm = ({createNotice, form}) => {
    const {getFieldDecorator, validateFields} = form;
    const submitHandle = e => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                createNotice(values.details)
            }
        });
    };
    return (
        <Form onSubmit={submitHandle}>
            <Item>
                {getFieldDecorator('details', {
                    rules: [{required: false}],
                })(
                    <TextArea
                        autosize={{ minRows: 6, maxRows: 8 }}
                        size="large"
                        placeholder="Jeśli chcesz opisz dokładniej swój problem..."
                    />
                )}
            </Item>
            <ButtonLarge type="primary" htmlType="submit">
                Dodaj prośbę
            </ButtonLarge>
        </Form>
    )
};

export default Form.create({name: 'details'})(DetailsForm);
