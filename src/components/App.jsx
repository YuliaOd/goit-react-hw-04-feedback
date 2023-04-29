import { useState } from "react";
import  { Statistics} from "./Statistics/Statistics";
import {FeedbackOptions}  from "./FeedbackOptions/FeedbackOptions";
import {Section} from "./Section/Section";
import {Notification} from "./Notofication/Notification";
import css from "./App.module.css";

export const App = () => {
 
 const [good, setGood] = useState(0);
 const [neutral, setNeutral] = useState(0);
 const [bad, setBad] = useState(0);
 
 

  const handleClick = func => {
    func(prevValue => prevValue + 1);
  };


    const total = good + neutral + bad;
    const positivePercentage =  Math.round((good / total) * 100);


    return (
        <div className={css.container}>
            <Section title="Please leave feedback">
                <FeedbackOptions
                 options={[
                    ['good', setGood],
                    ['neutral', setNeutral],
                    ['bad', setBad],
                 ]}
                 onLeaveFeedback={handleClick}/>
            </Section>

            <Section title="Statistics">
                {total ? (
                <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage} />
                ):(
                <Notification message="There is no feedback" />)}
            </Section>
        </div>
    )
  }
