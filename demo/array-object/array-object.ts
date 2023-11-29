/* eslint-disable */
import { strict as assert } from "assert";

type Link = {
  title: string;
  url: string;
}

const microsoft = {
  title: "microsoft"
  url: "microsoft"
};

const typescript = {
  title: "TypeScript"
  url: "typescriptlang.org"
};

const links = [microsoft, typescript]; 

//when working = with objects in arrays we use 
//. notation to access the properites in the arrays
const tsUrl = links[1].url;

links[0].title = "Microsoft";
