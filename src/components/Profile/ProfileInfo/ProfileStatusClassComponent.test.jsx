import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatusClassComponent';

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="status in my test"/>);
    const instance = component.getInstance(); // На основе класса component мы создаем экземпляр с помощью метода .getInstance() и далее работаем с ним
    expect(instance.state.status).toBe('status in my test');
  });
  test("after creation <span> should be displayed", () => {
    const component = create(<ProfileStatus status="f"/>);
    const root = component.root;
    const span = root.findByType("span");
    expect(span.length).not.toBeNull();
  });
  test("after creation <input> shouldn't be displayed", () => {
    const component = create(<ProfileStatus status="f"/>);
    const root = component.root;

    expect (() => {
      const input = root.findByType("input");
    }).toThrow();
  });
  test("after creation <span> should be displayed with correct status", () => {
    const component = create(<ProfileStatus status="status in my test"/>);
    const root = component.root;
    const span = root.findByType("span");
    expect(span.children[0]).toBe("status in my test");
  });
  test("input should be displayed in editMode instead of span", () => {
    const component = create(<ProfileStatus status="status in my test"/>);
    const root = component.root;
    const instance = component.getInstance();
    instance.activateEditMode();
    const input = root.findByType("input");
    expect(input.props.value).toBe("status in my test");
  });
  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status="status in my test" updateStatus={ mockCallback }/>);

    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});