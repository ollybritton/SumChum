
import { MathJax } from "better-react-mathjax";
import React from "react";
import { randint } from "./utils";

import "./Multiply.css"

export let info = {
    title: "Multiply",
    pageTitle: "Multiply",
    description: "Practice multiply arbitrary digit numbers together.",
    path: "/multiply"
}

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

    for (let i = 0; i < a - 1; i++) {
        x += `${randint(0, 9)}`
    }

    for (let i = 0; i < b - 1; i++) {
        y += `${randint(0, 9)}`
    }

    x = parseInt(x);
    y = parseInt(y);

    let question = `${x.toLocaleString()} \\times ${y.toLocaleString()}`
    let answer = x * y

    return {
        question: question,
        answer: answer,
    }
}

export class Multiply extends React.Component {
    constructor(props) {
        super(props);

        let options = { digits: [2, 2] }
        let initial = generate(options);

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
            this.setState({ hidden: false })
        } else {
            this.setState({ ...generate(this.state.options), hidden: true })
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
        let prettyAnswer = this.state.hidden ? " " : this.state.answer.toLocaleString()

        return (
            <div>
                <div className="Multiply-fixed-height">
                    <h1>
                        <MathJax dynamic hideUntilTypeset={"first"}>
                            {"$$" + this.state.question + "$$"}
                        </MathJax>
                    </h1>
                    <h2>
                        <MathJax dynamic hideUntilTypeset={"first"}>
                            {"$$" + prettyAnswer + "$$"}
                        </MathJax>
                    </h2>
                </div>
                <p>
                    There are several different ways to do efficient mental multiplication. The overarching idea is that space-complexity should be limited.
                </p>
            </div>
        )
    }
}