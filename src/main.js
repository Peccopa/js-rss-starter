import { ContainerComponent, TextComponent } from './shared/components';

const title = new TextComponent({
  tag: 'h1',
  content: 'Hello from Component Kit!',
  classes: 'app-title',
});

const app = new ContainerComponent({
  id: 'app',
  classes: 'app',
  children: [title],
});

document.body.append(app.element);

console.log('JS RSS Starter');
