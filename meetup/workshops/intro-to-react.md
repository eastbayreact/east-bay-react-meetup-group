# Table of Contents

1.  [[DRAFT] Intro to React](#org211042e)
    1.  [Sources that inspired this writeup](#orgc6435c0)
        1.  [Dan Abramov - "You're Missing the Point of React"](#org2334996)
        2.  [Sophie Alpert, Dan Abramov, Ryan Florence - React Hooks @ React Conf 2018](#orgb9fb10c)
        3.  [Kyle Simpson - YDKJS: Up & Going, Chapter 3](#orgdc78f6a)
    2.  [Make React transparent.](#org16b49ec)
        1.  [I'm not intimidated by excessive frameworks. I know that React isn't the only way to build things, and that's okay.](#orgde9d8d1)
        2.  [I'm not intimidated by developer jargon.](#org0ccc198)
        3.  [I know that "React" and "vanilla JavaScript" are two skills that go hand-in-hand.](#org53f16c3)
        4.  [I can start up a React project without hesitation.](#org05b889f)

<a id="org211042e"></a>

# [DRAFT] Intro to React

(disclaimer: this reads like a textbook, intend to shorten this to be presentable)

<a id="orgc6435c0"></a>

## Sources that inspired this writeup

<a id="org2334996"></a>

### [Dan Abramov - "You're Missing the Point of React"](https://medium.com/@dan_abramov/youre-missing-the-point-of-react-a20e34a51e1a)

- composition
- unidirectional data flow
- "**static mental model**"

<a id="orgb9fb10c"></a>

### [Sophie Alpert, Dan Abramov, Ryan Florence - React Hooks @ React Conf 2018](https://www.youtube.com/watch?v=dpw9EHDh2bM)

- re-discussion on the concept of elementary components (not component literals, components in general)
- centralizing the developer's perception of component behavior patterns
- centralizing the perception of component behavior patterns

<a id="orgdc78f6a"></a>

### [Kyle Simpson - YDKJS: Up & Going, Chapter 3](https://github.com/getify/You-Dont-Know-JS/blob/master/up%2520%2526%2520going/ch3.md)

- keep all parts of JavaScript transparent
- the line between "React things" and "JavaScript" things should not be blurry
- the purpose of combining JavaScript with component-based development should be clear

<a id="org16b49ec"></a>

## EPIC Make React transparent.

<a id="orgde9d8d1"></a>

### STORY I'm not intimidated by excessive frameworks. I know that React isn't the only way to build things, and that's okay.

1.  What is React?

    React is a frontend JavaScript framework. It is used to create applications which bundle different parts of a user interface into "_components_" like buttons, progress bars, image slideshows, etc.

    React is just one way to use JavaScript. For some of us, we choose to use React because it gives us a clearer way to envision how our apps should be designed, and it allows us to express ourselves in JavaScript more freely. These two put together gives us as developers the power to translate complex thoughts directly into code more seamlessly.

    For some, React may not be their first choice, because another framework like Vue or Angular does those two things for them better than React does&#x2013;that's perfectly fine. At the end of the day, we want to build apps and websites, and we should choose the system that works best for us.

<a id="org0ccc198"></a>

### STORY I'm not intimidated by developer jargon.

1.  Side note: JSX

    Instead of HTML, React uses **JSX**. It is simply JavaScript with a syntax that's meant to look like HTML. And just like HTML, we use JS as JSX because it makes writing our markup more intuitive. The syntax isn't completely identical, but the slight differences are only there to make sure we don't overlap with any JavaScript reserved words and sequences.

2.  Components

    1.  What is a component?

        We build React apps just as we build all of our other frontend apps: by defining their **markup**, **styling**, and **behavior**. However, instead of having all of our markup in one place, styling in another&#x2026; etc., We choose to design and package them _together_. We think of components as all inherently having these properties.

        Without React, we've all probably done this before:

            <!-- somewhere in index.html -->
            <span>What is 2 + 2?</span>
            <button class="cool-button">Show the answer</button>

            /* somewhere in style.css */
            .cool-button {
                background-color: #22aedf;
                margin: 10px;
                padding: 10px 25px;
            }

            // somewhere in script.js
            const button = document.querySelector('.cool-button')
            button.addEventListener('click', function(event) {
                alert(4)
            })

        Isn't that a lot of work just to design one button? We have to go to three different places just to get one thing working. In comes React:

            // CoolButton.js
            function handleClick() {
                alert(4)
            }

            function CoolButton() {
                const style = {
                    backgroundColor: '#22aedf',
                    margin: '10px',
                    padding: '10px 25px',
                }

                return (
                    <span>What is 2 + 2?</span>
                    <button style={style} onClick={handleClick}>Show the answer</button>
                )
            }

        Instead of writing three different files, in three different languages, to write one `button`, we chose to use one language, JavaScript, to write one _component_, `CoolButton`. It's still easy to see the different properties of this button, but we also can clearly see now that `CoolButton` is one singular unit: It **is** a button element, that **has** the background color blue, and **does** the action of showing you what 2 + 2 is. This is the advantage of the component model. The React team calls this **separation of our _concerns_ without separation of the _technology_ we use to write them**.

        1.  Putting components together

            Components don't just render plain old buttons and text boxes. They can also **render other components**. (this is a big deal, putting components together is the whole point&#x2026; etc. expand on this later)

3.  Props

    We build on top of this paradigm by introducing **props**. You're using props whenever you do this:

        <CoolButton color="blue" text="I am blue" />

    In that example, we passed in a prop, `color`, to our button, which will hopefully make it `blue` somehow.

    To explain how props work, let's think about how we write functions in JavaScript. We write a lot of functions which probably look like this:

        function toMemeCase(string) {
           let memeString = string.toUpperCase()
           for (let i = 0; i < memeString.length; i += 1) {
               if (i % 2) {
                   memeString[i] = memeString[i].toLowerCase()
               }
           }

           return memeString
        }

        toMemeCase('javascript sucks') // output: JaVaScRiPt SuCkS

    Here, we pass in an _argument_, `string`. Within the function, we take the argument and do something with it (in this case, meme on people who think JS sucks). We got back an output that is clearly related to what we passed in.

    When we write React, we use props to do the same thing to our components. We can think of them as arguments to a function&#x2026; because they _are_ arguments to a function.

        function BlueButton(props) {
            const style = {
                backgroundColor: props.color
            }

            return <button style={style}>{text}</button>
        }

    In every React component, `props` is just an object that is passed in to the component via JSX syntax, and when we look at the component definition itself, we can see exactly how those props are used.

4.  State

    `props` is one tool we use to describe our components. We can clearly say "I want this button to be blue", pass in the right props, and holy moly wow now the button actually IS blue!

    (TODO: pick up where the props section left off. props describe components, period. when components have to change, state describes them as they change. props are given, state is intrinsic)

5.  Lifecycle

<a id="org53f16c3"></a>

### STORY I know that "React" and "vanilla JavaScript" are two skills that go hand-in-hand.

1.  Events

2.  Downwards data flow

<a id="org05b889f"></a>

### STORY I can start up a React project without hesitation.

1.  TODO Writing our first app
