import { Cascader } from 'antd';
import React from 'react';
import { getAllEdgeTypes } from "./GenerateData";

interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}

const options: Option[] = [
  {
    value: 'Edge Types',
    label: 'Edge Types',
    children: [
    ],
  },
  
];

const onChange = (value: string[]) => {
  console.log(value);
};
class ChooseEdges extends React.Component{


listEdgeTypes(){
  getAllEdgeTypes().then(
    (resp) => {
      var edges = resp.edge_types;
      
      
      for(let i = 0; i < edges.length; i++){
        var val: Option = {value: edges[i], label: edges[i]};

       options[0].children?.push(val);
      }
      console.log(resp.edge_types)
      //return resp.edge_types;
    }
  )
}


render(){
  this.listEdgeTypes();
  return(
    
    <Cascader options={options} onChange={onChange} placeholder="Please select" />

  )
}

}
export default ChooseEdges;