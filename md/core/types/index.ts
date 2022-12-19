// namespace types {
//   export type Variant = {
//     button: 'filled' | 'outlined' | 'tonal' | 'text';
//   };

//   export type Color = {
//     button: 'primary' | 'secondary' | 'tertiary' | 'error' | 'surface';
//   };

//   export type State = {
//     button: 'hovered' | 'pressed' | 'focused' | 'disabled';
//   };

//   export type Modifier = {
//     button:
//       | 'isActive'
//       | 'isDisabled'
//       | 'isHover'
//       | 'isPress'
//       | 'isLoading'
//       | 'isDisabled';
//   };

//   export type Action = {
//     button?: any;
//   };

//   export type Specs = {
//     button: {
//       container: string;
//       labelText: string;
//       icon: string;
//     };
//   };
// }

// class Component {
//   constructor(
//     public variant: types.Variant,
//     public color: types.Color,
//     public state: types.State,
//     public modifier: types.Modifier,
//     public action: types.Action,
//     public specs: types.Specs
//   ) {}
// }

// class Button extends Component {
//   constructor(
//     public variant: types.Variant,
//     public color: types.Color,
//     public state: types.State,
//     public modifier: types.Modifier,
//     public action: types.Action,
//     public specs: types.Specs
//   ) {
//     super(variant, color, state, modifier, action, specs);
//   }
// }

// class ButtonVue extends Button {
//   constructor(variant: types.Variant) {
//     super(variant.button, color, state, modifier, action, specs);
//   }
// }
