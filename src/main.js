import {
  ContainerComponent,
  ButtonComponent,
  TextComponent,
} from './shared/component-kit';
import StateKit from './shared/state-kit';

// === State Kit ===

const initialState = { count: 0 };

const stateKit = new StateKit(initialState);

const increment = (state, action) => {
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  return state;
};

stateKit.addReducer(increment);

// === Component Kit ===

const counter = new TextComponent({
  tag: 'p',
  content: `Count: ${stateKit.getState().count}`,
});

const button = new ButtonComponent({
  content: 'Increment',
});

button.setListeners({
  click: () => {
    console.log(1);

    stateKit.dispatch({ type: 'INCREMENT' });
  },
});

stateKit.subscribe((state) => {
  counter.setContent(`Count: ${state.count}`);
});

const app = new ContainerComponent({
  id: 'app',
  classes: 'app',
  children: [counter, button],
});

document.body.append(app.element);
