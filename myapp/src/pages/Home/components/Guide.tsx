import { Layout, Row, Typography, Card } from 'antd';
import React from 'react';
import styles from './Guide.less';
import ChooseEdges from './ChooseEdges';
import { Graph, GraphConfigInterface } from "@cosmograph/cosmos";

import {Node, Link, nodes, links, clicked} from './MyGraph'

interface Props {
  name: string;
}









//脚手架示例组件
class Guide extends React.Component{
  //const { name } = props;
  constructor(props){
    super(props);
    this.state = {
      clickedNodeID: "",
    }


  }
  showGraph(){
    console.log("hhhh")

  
  }
  handleClick(){
    if(clicked != undefined){
      this.setState({clickedNodeID: clicked.id})
      console.log(clicked, 'aaaaaa')
    }
    
  }
  render(){
    this.showGraph();
    //const id = this.state.clickedNodeID;
    return (
    <Layout>
      
      <Row>
        <Typography.Title level={3} className={styles.title}>
          Covid-19 Starter Kit
        </Typography.Title>
      </Row>
      <Row>
        <ChooseEdges></ChooseEdges>
        <canvas width="1000" height="1000" style={{width: '60%', height: '60%'}} onClick={()=>this.handleClick()}>
        </canvas>
        <Card title="Node Description"  style={{ width: 300 }} >
          <p>Node id: {this.state.clickedNodeID}</p>
        </Card>
      </Row>
      
    </Layout>
  );
  }
  
};

//}



export default Guide;
