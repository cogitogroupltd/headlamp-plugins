import React from 'react';
import {
  ConfigStore,
  registerAppLogo,
  registerPluginSettings,
} from '@kinvolk/headlamp-plugin/lib';
import type { AppLogoProps } from '@kinvolk/headlamp-plugin/lib';
import { Settings } from './settings';

type Conf = {
  logoURL?: string;
  maskShape?: 'circle' | 'square';
  paddingPct?: number; // 0–20
  bgColor?: string; // e.g. "#fff" or "transparent"
};

const store = new ConfigStore<Conf>('change-logo');
const useConf = store.useConfig;

export function SimpleLogo(props: AppLogoProps) {
  const { className } = props;
  const conf = useConf() ?? {};
  const {
    logoURL,
    maskShape = 'circle',
    paddingPct = 0,
    bgColor = 'transparent',
  } = conf;

  if (!logoURL) {
    return null;
  }

  const borderRadius = maskShape === 'circle' ? '50%' : '0';
  const padding = `${Math.max(0, Math.min(20, paddingPct || 0))}%`;

  return (
    <div
      className={className}
      style={{
        borderRadius,
        overflow: 'hidden',
        background: bgColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding,
        width: '100%',
        height: '100%',
      }}
    >
      <img
        src={logoURL}
        alt="Custom logo"
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'contain' 
        }}
      />
    </div>
  );
}

registerAppLogo(SimpleLogo);
registerPluginSettings('change-logo', Settings, true);