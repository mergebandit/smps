# Shipping Label Maker

## Notes

1. Instructions say to use CRA to scaffold the application, while also creating a folder called `core/components/wizard`. For the purposes of this exercise, I'm going to assume that `core` should reside within the `src` folder, as CRA doesn't allow for relative imports outside of src. This logic applies for any additional subfolders created per instructions. If `core` etc should have been a folder at the root of the project, I could have done any of the following:

- use `react-app-rewired` and configure the `ModuleScope Plugin`
- eject from `create-react-app` and configure the `ModuleScope Plugin`
- symlinks / consume `core` etc as external modules

2. The instructions would seem to indicate that each `Step` should call an `action` passing a `WizardAction` _when the step wants the wizard to take an action_. This led me to believe you wanted the action buttons to live at the `Step` level. Objectively, I think I would have each `Step` accept a `onUpdate` function. Each step would then be responsible for persisting its data whenever the `onUpdate` method was called.

3. I don't love the decision to have to pass the `wizardContext` object around. It results in several levels of props drilling (defined as a component which does nothing but pass the props through to a child component). In my initial implementation, rather than pass an `object` or context class `instance` around, I chose to use `React.createContext` along with the `useContext` hook to access the context as needed. An example implementation of this lives inside a block comment within `features/shipping-label-maker/steps/sender-address`.

4. Couldn't rename `src/setupTests.js` per your naming convention because it's the default file for CRA. By default, CRA does not support the `setupTestFrameworkScriptFile` option in `package.json`'s `jest` property.

5. Auth implementation is obviously very weak. Given additional time I would have set up routing using Reach Router (similar API to react-router but built with accessibility in mind), and I would have protected our create-shipping-label route and redirected to login route if the user wasn't logged in. In a production app, I'd also use `jwt`s, `HttpOnly` and `Secure` cookie flags on a `Set-Cookie` HTTP header, etc to prevent XSS / CRSF / etc. Should also implement logic to determine if `email` is a valid email.

## Things I'd do with more time

* [ ] Form layout logic is brittle (ultimately multiplying fractions), which could produce inconsistent UX. Includes some `magic numbers` such as min-height.
* [ ] Better validation logic on forms (e.g. required vs min length)
* [ ] Preoptimization: Could extract sub-components in `confirm.js` to reduce file size. Hard to grok 100+.
* [ ] Move all styles to styled components
* [ ] Probably shouldn't have shipping info provider wrapping the entire app
* [ ] TypeScript
* [ ] Deleting the contents of an address field throws a validation error. It does not persist the blank value to the context. Is this desirable?
