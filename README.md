# Shipping Label Maker

## Notes

1. Instructions say to use CRA to scaffold the application, while also creating a folder called `core/components/wizard`. For the purposes of this exercise, I'm going to assume that `core` should reside within the `src` folder, as CRA doesn't allow for relative imports outside of src. This logic applies for any additional subfolders created per instructions. If `core` etc should have been a folder at the root of the project, I could have done any of the following:

- use `react-app-rewired` and configure the `ModuleScope Plugin`
- eject from `create-react-app` and configure the `ModuleScope Plugin`
- symlinks / consume `core` etc as external modules

2. The wizard should ultimately

## Todo

[] Form layout logic is brittle
[] Better validation logic on form (e.g. required vs min length)
[] Preoptimization: Could extract Cards in `confirm.js` to reduce duplication
[] Move all styles to styled components
