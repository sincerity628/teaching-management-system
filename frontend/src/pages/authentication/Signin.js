import React, { useState, useContext } from 'react';
import { Input, Grid, Row, Col, Button } from 'rsuite';
import { UIContext } from '../../contexts/UIContext';
import api from '../../tools/api';
import "./signin.css";

const initUser = {
  num: '',
  password: ''
};

const Signin = () => {
  const { setMessage } = useContext(UIContext);
  const [user, setUser] = useState(initUser);

  const handleChange = (v, e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(!user.num || !user.password) {
      setMessage({
        isMessage: true,
        title: 'warning',
        description: '还有信息没有填写完整噢'
      });
      return;
    }

    api
      .signin(user)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      })
  };

  return (
    <div className="signin">
      <Grid fluid>
        <Row className="login-row">
          <Col xs={14} style={{ padding: 0 }}>
            <div className="login-image"></div>
          </Col>
          <Col xs={10} style={{ padding: 0 }}>
          <h3 className="login-title">教学管理系统</h3>
            <div className="login-form">
              <form onSubmit={handleSubmit}>
                <div className="login-input">
                  <Input
                    id="num"
                    value={user.num}
                    placeholder="学号/工号"
                    className="my-input"
                    type="text"
                    onChange={handleChange}
                  />
                </div>
                <div className="login-input">
                  <Input
                    id="password"
                    value={user.password}
                    placeholder="密码"
                    className="my-input"
                    type="password"
                    onChange={handleChange}
                  />
                </div>

                <Button
                  block
                  color="red"
                  onClick={handleSubmit}
                >登录</Button>
              </form>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Signin;
