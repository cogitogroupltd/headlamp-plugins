import React from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
  Typography,
} from '@mui/material';

interface SettingsData {
  logoURL?: string;
  maskShape?: 'circle' | 'square';
  paddingPct?: number;
  bgColor?: string;
}

interface SettingsProps {
  data: SettingsData;
  onDataChange: (newData: SettingsData) => void;
}

export function Settings({ data, onDataChange }: SettingsProps) {
  const d = data || {};

  const handleLogoURLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onDataChange({ ...d, logoURL: event.target.value });
  };

  const handleMaskShapeChange = (event: any) => {
    onDataChange({ ...d, maskShape: event.target.value as 'circle' | 'square' });
  };

  const handlePaddingChange = (_event: Event, value: number | number[]) => {
    onDataChange({ ...d, paddingPct: value as number });
  };

  const handleBgColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onDataChange({ ...d, bgColor: event.target.value });
  };

  return (
    <Box sx={{ maxWidth: 520, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Change Logo Settings
      </Typography>
      
      <TextField
        fullWidth
        label="Logo URL"
        placeholder="https://example.com/logo.png"
        value={d.logoURL || ''}
        onChange={handleLogoURLChange}
        margin="normal"
        helperText="URL to your custom logo image"
      />

      <FormControl fullWidth margin="normal">
        <InputLabel>Mask Shape</InputLabel>
        <Select
          value={d.maskShape || 'circle'}
          onChange={handleMaskShapeChange}
          label="Mask Shape"
        >
          <MenuItem value="circle">Circle (current)</MenuItem>
          <MenuItem value="square">Square (no mask)</MenuItem>
        </Select>
      </FormControl>

      <Box sx={{ mt: 3, mb: 2 }}>
        <Typography gutterBottom>
          Padding (%) — prevents edge clipping
        </Typography>
        <Slider
          value={d.paddingPct ?? 0}
          onChange={handlePaddingChange}
          min={0}
          max={20}
          step={1}
          marks
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => `${value}%`}
        />
      </Box>

      <TextField
        fullWidth
        label="Background Color"
        placeholder="transparent, #ffffff, rgba(255,255,255,0.5)"
        value={d.bgColor || 'transparent'}
        onChange={handleBgColorChange}
        margin="normal"
        helperText="CSS color value for background behind the logo"
      />

      {d.logoURL && (
        <Box sx={{ mt: 3, p: 2, border: '1px solid #ccc', borderRadius: 1 }}>
          <Typography variant="subtitle2" gutterBottom>
            Preview:
          </Typography>
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: (d.maskShape || 'circle') === 'circle' ? '50%' : '0',
              overflow: 'hidden',
              background: d.bgColor || 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: `${Math.max(0, Math.min(20, d.paddingPct || 0))}%`,
              border: '1px solid #ddd',
            }}
          >
            <img
              src={d.logoURL}
              alt="Logo preview"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
}