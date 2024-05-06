import React, { useState } from 'react';
import { AppRegistry } from 'react-native';
import { Button, Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';

import Bonner from './Banner';
import Cartao from './card';
import Switcher from './botum';

export default function Main() {
    const [aparecer, setAparecer] = useState(false);

    return (
        <PaperProvider>
            {aparecer && <Bonner/>}
            <Cartao />
            <Switcher />
            <Button icon="camera" mode="contained" onPress={() => setAparecer(!aparecer)}>
                Press me
            </Button>
        </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
