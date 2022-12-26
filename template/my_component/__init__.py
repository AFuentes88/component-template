import os
import streamlit.components.v1 as components
import streamlit as st

st.title('Component Tutorial')

DropdownWidget = components.declare_component(
    # We give the component a simple, descriptive name ("Dropdown_Widget"
    # does not fit this bill, so please choose something better for your
    # own component :)
    "Dropdown_Widget",
    # Pass `url` here to tell Streamlit that the component will be served
    # by the local dev server that you run via `npm run start`.
    # (This is useful while your component is in development.)
    url="http://localhost:3001",
)

component_value = DropdownWidget(options=['Option 1', 'Option 2', 'Option 3'], onChange=[], key=None, default=0)