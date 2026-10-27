# Defence Gun · vídeo vertical (versión 2)

Segunda versión independiente de la composición Remotion. Conserva la narración, el guion y la duración de la pieza original, con una puesta en escena renovada y cinco secuencias visuales.

**Formato:** 9:16 · 1080 × 1920 · 30 fps · aproximadamente 59 s.

## Recursos

- `public/Audio.aac`: copia de la narración original de `../docs/Audio.aac`.
- `public/defenseGun.svg`: copia de la ilustración existente en `../puckle-vertical-video/public/defenseGun.svg`.
- `src/scenes/`: escenas independientes de apertura, patente, mecanismo, contexto y cierre.

La narración no incluye música ni efectos añadidos. El diagrama animado es conceptual, no está a escala y no representa un procedimiento de uso.

## Vista previa

```bash
npm install
npm run dev
```

Abre la composición `PuckleVerticalV2` en Remotion Studio.

## Comprobación y exportación

```bash
npm run typecheck
npm run render
```

El vídeo se exporta como `video_version_2.mp4` dentro de esta carpeta. La configuración evita sobrescribir un archivo de salida existente.
