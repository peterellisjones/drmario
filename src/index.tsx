/// <reference path="../typings/index.d.ts" />

import App from "./components/app";

/* tslint:disable */
import * as React from "react";
/* tslint:enable */

require("./styles/app.less");

import { render } from "react-dom";

render(<App />, document.getElementById("root"));
