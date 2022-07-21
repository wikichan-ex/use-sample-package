import "./style.scss";
import { sample } from "@wikichan-ex/sample-package";


window.callSampleFunction = function () {
    const sampleText = sample();
    const element = document.getElementById('text_result');
    element.innerText = sampleText;
}

