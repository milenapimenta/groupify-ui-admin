import { CheckOutlined } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent";
import FormComponent from "../FormComponent"
import InputComponent from "../InputComponent";

const CategoryForm = () => {
  return (
    <>
      <h1>Nova Categoria</h1>
      <FormComponent>
        <div style={{display: 'flex', justifyContent: "space-between"}}>
          <div style={{width: '45%'}}>
            <InputComponent
              name='name'
              required={true}
              placeholder= 'Digite o nome...'
            />
          </div>
          <div style={{width: '45%'}}>
            <InputComponent
              name='slug'
              required={false}
              placeholder= 'Digite a url...'
            />
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'start'}}>
          <ButtonComponent
            htmlType="submit"
            text='Salvar'
            icon={<CheckOutlined />}
          />
        </div>
      </FormComponent>
    </>
  )
}

export default CategoryForm;
