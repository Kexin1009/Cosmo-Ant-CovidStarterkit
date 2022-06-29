import { Graph, GraphConfigInterface } from "@cosmograph/cosmos";
import { getInfectedBy, getPatientTraveled, getBirthStamp } from "./GenerateData";

// const Canvas= () => {


export type Node = {
    id: string;
    //type: string
    color: string;
    size: number;
  };
  
export type Link = {
    source: string;
    target: string;
    color: string;
  };
  
const links: Link[] = [];
const nodes: Node[] = [];
  
  const infectedBy = getInfectedBy();
  const patientTraveled = getPatientTraveled();
  const birthStamp = getBirthStamp();
  
  let clicked: Node | undefined;
  // let canvas: HTMLCanvasElement;
  // let config: GraphConfigInterface<Node, Link>;
  
  Promise.all([infectedBy, patientTraveled,birthStamp]).then((values) => {
    let infectedBy_data = values[0];
      for (let node = 0; node < infectedBy_data.patients.length; node += 1) {
      nodes.push( {id: `${infectedBy_data.patients[node].v_id}`, color: 'pink', size:10} );
    }
    
    for (let node = 0; node < infectedBy_data.edges.length; node += 1) {
      links.push({ source: `${infectedBy_data.edges[node].from_id}`, target: `${infectedBy_data.edges[node].to_id}`, color: 'pink'});
      
    }
  
    let patientTraveled_data = values[1];
    for (let node = 0; node < patientTraveled_data.travel_events.length; node += 1) {
      nodes.push( {id: `${patientTraveled_data.travel_events[node].v_id}`, color: 'yellow', size: 5} );
    }
    for (let node = 0; node < patientTraveled_data.edges.length; node += 1) {
      links.push({ source: `${patientTraveled_data.edges[node].from_id}`, target: `${patientTraveled_data.edges[node].to_id}`, color: 'yellow'});
      
    }
  
    let birthStamp_data = values[2];
    for (let node = 0; node < birthStamp_data.years.length; node += 1) {
      nodes.push( {id: `${birthStamp_data.years[node].v_id}`, color: 'white', size: 5} );
    }
    for (let node = 0; node < birthStamp_data.edges.length; node += 1) {
      links.push({ source: `${birthStamp_data.edges[node].from_id}`, target: `${birthStamp_data.edges[node].to_id}`, color: 'white'});
      
    }
  
    // console.log(values[0]);
    // console.log(values[1]);
    const canvas = document.querySelector("canvas") as HTMLCanvasElement;
    const config: GraphConfigInterface<Node, Link> = {
      // backgroundColor: "#151515",
      nodeSize: n=>n.size,
      nodeColor: n=>n.color,
      // linkWidth: link => link.weight,
      linkColor: link => link.color,
      // linkArrows: false,
      // simulation: {
      //   linkDistance: 1,
      //   linkSpring: 2,
      //   repulsion: 0.2,
      //   gravity: 0.1,
      //   decay: 100000
      // },
      events: {
        onClick: (node) => {
          console.log("Clicked node: ", node);
          clicked = node
        }
      }
    };
  const graph = new Graph(canvas, config);
  graph.setData(nodes, links);
  graph.zoom(0.8);

  
  });
//}
export {nodes, links, clicked};