const registry = {};

const renderWrapper = component => {
  return (targetElement, state) => {
    const element = component(targetElement, state);
    const childComponents = element.querySelectorAll('[data-component]');

    Array
      .from(childComponents)
      .forEach(target => {
        const name = target
          .dataset
          .component

        const child = registry[name];
        if (!child) {
          return false;
        }

        target.replaceWith(child(target, state));
      })

    return element;
  }
}

const renderRoot = (root, state) => {
  const cloneComponent = root => {
    return root.cloneNode(true);
  }

  return renderWrapper(cloneComponent)(root, state)
}

const add = (name, component) => {
  registry[name] = renderWrapper(component);
}

export default {
  add,
  renderRoot
}
