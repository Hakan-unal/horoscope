import { useState } from "react";
import { Row, Col, Select, Form, Button, Card, Space } from 'antd';
import { days, months, horoscope } from "./staticData/data"
import { showNotification } from "./components/general/notification";
import Meta from "antd/es/card/Meta";



const App = () => {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState<any>(horoscope[6])


  const onFinish = (values: any) => {
    calculator(values.day, values.month)
  };

  const onFinishFailed = (errorInfo: any) => {
    errorInfo.errorFields.map((o: any) => {
      showNotification("error", "Form error", o.errors[0] + " !", null)

    })
  };


  const calculator = (day: number, month: number) => {
    if ((day >= 21 && month === 3) || (day <= 20 && month === 4)) setCurrent(horoscope[1])
    if ((day >= 21 && month === 4) || (day <= 20 && month === 5)) setCurrent(horoscope[2])
    if ((day >= 21 && month === 5) || (day <= 20 && month === 6)) setCurrent(horoscope[3])
    if ((day >= 21 && month === 6) || (day <= 22 && month === 7)) setCurrent(horoscope[4])
    if ((day >= 23 && month === 7) || (day <= 22 && month === 8)) setCurrent(horoscope[5])
    if ((day >= 23 && month === 8) || (day <= 22 && month === 9)) setCurrent(horoscope[6])
    if ((day >= 23 && month === 9) || (day <= 22 && month === 10)) setCurrent(horoscope[7])
    if ((day >= 23 && month === 10) || (day <= 22 && month === 11)) setCurrent(horoscope[8])
    if ((day >= 23 && month === 11) || (day <= 21 && month === 12)) setCurrent(horoscope[9])
    if ((day >= 22 && month === 12) || (day <= 19 && month === 1)) setCurrent(horoscope[10])
    if ((day >= 20 && month === 1) || (day <= 18 && month === 2)) setCurrent(horoscope[11])
    if ((day >= 19 && month === 2) || (day <= 20 && month === 3)) setCurrent(horoscope[0])
  }


  return (<Row>
    <Col xs={24} sm={{ span: 8, offset: 8 }}>
      <Space direction="vertical" size={40} >
        <Card
          hoverable
          cover={current?.icon}
        >
          <Meta title={current?.title} description={current?.description} />
        </Card>
        <Form
          form={form}
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{ day: 30, month: 8 }}
          autoComplete="off"
        >
          <Form.Item
            name="day"
            rules={[{ required: true, message: 'Please input your day' }]}
          >
            <Select
              placeholder="Please select your birth day"
              allowClear
              options={days}
            />
          </Form.Item>
          <Form.Item
            name="month"
            rules={[{ required: true, message: 'Please input your month' }]}
          >
            <Select
              placeholder="Please select your birth month"
              allowClear
              options={months}
            />
          </Form.Item>

          <Form.Item >
            <Button block htmlType="submit">
              Submit
            </Button>
          </Form.Item>

        </Form>
      </Space>

    </Col>

  </Row>
  )
}


export default App;