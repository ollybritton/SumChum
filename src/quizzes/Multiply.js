
import { MathJax } from "better-react-mathjax";
import React from "react";
import { randint } from "./utils";

// generate creates a multiplication question.
// options.digits = [a, b] where a and b are the lengths of the input numbers.
export function generate(options) {
    let a = options.digits[0];
    let b = options.digits[1];

    if (a <= 0 || !Number.isInteger(a)) {
        return {
            error: "invalid number of digits for multiplicand"
        }
    } else if (b <= 0 || !Number.isInteger(b)) {
        return {
            error: "invalid number of digits for multiplier"
        }
    }

    let x = `${randint(1, 9)}`;
    let y = `${randint(1, 9)}`;

    for (let i = 0; i < a-1; i++) {
        x += `${randint(0, 9)}`
    }

    for (let i = 0; i < b-1; i++) {
        y += `${randint(0, 9)}`
    }

    let question = `${x} \\times ${y}`
    let answer = parseInt(x) * parseInt(y)

    return {
        question: question,
        answer: answer,
    }
}

export class Multiply extends React.Component {
    constructor(props) {
        super(props);

        let options = {digits: [2, 2]}
        let initial = generate(options);

        console.log(initial)

        this.state = {
            options: options,
            question: initial.question,
            answer: initial.answer,
            hidden: true,
        }

        this.updateQuestion = this.updateQuestion.bind(this);
        this.keydownHandler = this.keydownHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        window.addEventListener("keydown", this.keydownHandler)
        window.addEventListener("click", this.clickHandler)
    }
    
    componentWillUnmount() {
        window.removeEventListener("keydown", this.keydownHandler)
        window.removeEventListener("click", this.clickHandler)
    }

    updateQuestion() {
        if (this.state.hidden) {
            this.setState({hidden: false})
        } else {
            this.setState({...generate(this.state.options), hidden: true})
        }
    }

    keydownHandler(e) {
        if (e.key === "Enter") {
            this.updateQuestion()
        }
    }

    clickHandler(e) {
        this.updateQuestion();
    }

    clickHandler(e) {
        this.updateQuestion()
    }


    render() {
        let prettyAnswer = this.state.answer.toLocaleString() // Put commas in the right places.

        return (
            <div>
                <h1><MathJax dynamic hideUntilTypeset={"first"}>{`$$${this.state.question}$$`}</MathJax></h1>
                <h2 hidden={this.state.hidden}><MathJax dynamic hideUntilTypeset={"first"}>{`$$${prettyAnswer}$$`}</MathJax></h2>
            </div>
        )
    }
}