# Change Logo Plugin

This plugin allows you to replace the default Headlamp logo with your own custom logo, with flexible rendering options to support both circular and square/rectangular logos.

## Features

- **Custom Logo URL**: Replace the default Headlamp logo with any image via URL
- **Flexible Shape**: Choose between circular (default) or square rendering
- **Padding Control**: Add padding (0-20%) to prevent wide logos from being clipped
- **Background Color**: Optional background color behind the logo for better contrast
- **Live Preview**: See your changes in the settings panel before applying

## Configuration Options

### maskShape
- **Type**: `"circle" | "square"`
- **Default**: `"circle"`
- **Description**: Controls the shape of the logo container
  - `circle`: Renders logo in a circular mask (current default behavior)
  - `square`: Renders logo in a rectangular container with no mask

### paddingPct
- **Type**: `number` (0-20)
- **Default**: `0`
- **Description**: Adds internal padding around the image as a percentage of the container size. Useful for preventing wide rectangular logos from being clipped at the edges.

### bgColor
- **Type**: `string`
- **Default**: `"transparent"`
- **Description**: CSS color value for the background behind the logo. Accepts any valid CSS color:
  - Named colors: `"white"`, `"black"`
  - Hex colors: `"#ffffff"`, `"#000"`
  - RGB/RGBA: `"rgb(255,255,255)"`, `"rgba(255,255,255,0.8)"`
  - `"transparent"` for no background

### logoURL
- **Type**: `string`
- **Description**: URL to your custom logo image. Supports common formats (PNG, JPG, SVG, etc.)

## Usage

1. Go to **Settings > Plugins > Change Logo**
2. Enter your logo URL in the "Logo URL" field
3. Configure the shape, padding, and background color as needed
4. Use the live preview to see how your logo will appear
5. Click "Save" to apply the changes

## Best Practices

### For Square/Rectangular Logos
- Set `maskShape` to `"square"`
- Use transparent PNG images for best results
- Consider adding 5-10% padding for breathing room
- Use a subtle background color if your logo needs contrast

### For Circular Logos
- Keep the default `maskShape` of `"circle"`
- Design your logo to work well in a circular container
- Ensure important elements aren't near the edges

## Examples

### Corporate Logo (Square)
```json
{
  "logoURL": "https://example.com/company-logo.png",
  "maskShape": "square",
  "paddingPct": 8,
  "bgColor": "rgba(255, 255, 255, 0.1)"
}
```

### Circular Brand Mark
```json
{
  "logoURL": "https://example.com/circular-logo.png",
  "maskShape": "circle",
  "paddingPct": 0,
  "bgColor": "transparent"
}
```

### High Contrast Setup
```json
{
  "logoURL": "https://example.com/logo-white.svg",
  "maskShape": "square",
  "paddingPct": 12,
  "bgColor": "#1976d2"
}
```

## Troubleshooting

**Logo appears cropped**: Increase the `paddingPct` value or switch to `square` shape.

**Logo looks too small**: Decrease the `paddingPct` value.

**Logo doesn't show**: Ensure the URL is accessible and points to a valid image file.

**Poor contrast**: Add a `bgColor` that contrasts with your logo colors.

## Version History

- **0.0.1-2**: Added flexible shape options, padding control, and background color support
- **0.0.1-1**: Initial implementation with circular logo support