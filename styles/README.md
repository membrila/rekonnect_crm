# Styles Directory Documentation

This directory contains the styles used throughout the Rekonnect-CRM application. 

## Styling Conventions

- **CSS Modules**: Styles are organized using CSS Modules to ensure that styles are scoped locally to the components they are applied to, preventing any unintended side effects.
  
- **Global Styles**: Any global styles that need to be applied across the application can be placed in a dedicated global stylesheet.

## Applying Styles

To apply styles to a component, import the corresponding CSS module at the top of your component file:

```tsx
import styles from './ComponentName.module.css';
```

Then, use the imported `styles` object to apply classes to your JSX elements:

```tsx
<div className={styles.className}>Content</div>
```

## Best Practices

- Keep styles modular and reusable.
- Use descriptive class names that reflect the purpose of the style.
- Avoid using inline styles unless necessary for dynamic styling.