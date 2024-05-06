import * as React from 'react';
import { Switch } from 'react-native-paper';

const Switcher = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
};

export default Switcher;