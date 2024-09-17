'use client';
import { ChildComponent, component, components } from '@components/index';
import { createElement, useEffect, useState } from 'react';

export function GenerateComponents({ name, children, props, action }: component): any {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const Component = components[name];
  if (!Component) {
    console.warn(`Component ${name} not found`);
    return null;
  }

  const propsData: Record<string, any> = { ...props, action };

  // Recursively render child components if any
  if (children?.length) {
    propsData['children'] = children.map((child) => GenerateComponent(child));
  }

  // Render the component with its props and children
  return createElement(Component, propsData);
}

function GenerateComponent({ key, name, children, props }: ChildComponent): any {
  const Component = components[name];
  if (!Component) {
    console.warn(`Component ${name} not found`);
    return null;
  }

  const propsData: { [key: string]: any } = { ...props, key };

  // Recursively render child components if any
  if (children?.length) {
    propsData.children = children?.map((child) => GenerateComponent(child));
  }

  // Render the component with its props and children
  return createElement(Component, propsData);
}
