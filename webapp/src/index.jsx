import React from 'react';

const Icon = () => <i className='icon fa fa-plug'/>;

class HelloWorldPlugin {
    initialize(registry, store) {
        registry.registerChannelHeaderButtonAction(
            <Icon />,
            () => {
                alert("Hello World!");
            },
            "Hello World",
        );
    }
}

window.registerPlugin('com.example.my-react-plugin', new HelloWorldPlugin());