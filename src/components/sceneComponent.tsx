import React, { useEffect } from 'react';
import { Engine, Scene, ArcRotateCamera, Vector3, Mesh, ParticleSystem, Texture, Color4 } from "@babylonjs/core";

interface BackgroundParticlesProps {
    className?: string;
}

const BackgroundParticles: React.FC<BackgroundParticlesProps> = ({ className }) => {
    useEffect(() => {
        const canvas = document.getElementById('renderCanvas') as HTMLCanvasElement;
        const engine = new Engine(canvas, true);

        const createScene = function () {
            const scene = new Scene(engine);

            const camera = new ArcRotateCamera(
                'ArcRotateCamera',
                0,
                Math.PI / 2,
                15,
                new Vector3(0, 0, 0),
                scene
            );
            camera.attachControl(canvas, false);
            scene.clearColor = new Color4(0, 0, 0.2, 1);

            const fountain = Mesh.CreateBox('foutain', 0.1, scene);
            fountain.visibility = 0.1;
            fountain.position = new Vector3(0, 0, 6.5);
            let particleSystem: ParticleSystem;

            const createNewSystem = function () {
                if (particleSystem) {
                    particleSystem.dispose();
                }

                particleSystem = new ParticleSystem('particles', 1000, scene);
                particleSystem.createCylinderEmitter(2, 4, 0, 0);
                particleSystem.emitRate = 5;
                particleSystem.particleTexture = new Texture('/images/spark.png', scene);
                particleSystem.maxLifeTime = 5.0;
                particleSystem.minSize = 0.1;
                particleSystem.maxSize = 0.4;
                particleSystem.emitter = fountain;
                particleSystem.minEmitPower = 3;
                particleSystem.maxEmitPower = 6;
                particleSystem.updateSpeed = 1 / 60;
                particleSystem.gravity = new Vector3(0, 0, 0);
                particleSystem.color1 = new Color4(0.5, 0.5, 1.0, 1.0);
                particleSystem.color2 = new Color4(1.0, 1.0, 1.0, 1.0);
                particleSystem.colorDead = new Color4(0, 0, 0.2, 0.0);

                particleSystem.start();
            };

            createNewSystem();

            return scene;
        };

        const scene = createScene();

        engine.runRenderLoop(() => {
            scene.render();
        });

        const resizeWindow = () => {
            engine.resize();
        };

        window.addEventListener('resize', resizeWindow);

        return () => {
            window.removeEventListener('resize', resizeWindow);
        };
    }, []);

    return <canvas id="renderCanvas" className={className} />;
};

export default BackgroundParticles;
