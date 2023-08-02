import React, { useEffect, useRef, useState } from 'react';
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

interface ProductConfiguratorProps {
    className?: string;
}

interface ColorOptionProps {
    color: BABYLON.Color3;
    activeColor: BABYLON.Color3;
    onClick: (color: BABYLON.Color3) => void;
}

const renderColorOption = ({ color, activeColor, onClick }: ColorOptionProps) => {
    return (
        <div
            className={`w-8 h-8 rounded-full hover:cursor-pointer ${activeColor.toHexString() === color.toHexString() ? 'border-2 border-cyan-500' : ''}`}
            style={{ backgroundColor: color.toHexString() }}
            onClick={() => onClick(color)}
        />
    );
};

const ProductConfiguator: React.FC<ProductConfiguratorProps> = ({ className }) => {
    const [activeColor, setActiveColor] = useState<BABYLON.Color3>(BABYLON.Color3.White());

    const fabricMaterialRef = useRef<BABYLON.PBRBaseMaterial | null>(null);

    useEffect(() => {
        let engine: BABYLON.Engine;
        let scene: BABYLON.Scene;
        let model: BABYLON.AbstractMesh[] = [];

        const createScene = async () => {
            const canvas = document.getElementById('chairCanvas') as HTMLCanvasElement;
            engine = new BABYLON.Engine(canvas, true);
            scene = new BABYLON.Scene(engine);
            const camera = new BABYLON.ArcRotateCamera('Camera', 0, 0, 130, new BABYLON.Vector3(0, 20, 0), scene);
            camera.setPosition(new BABYLON.Vector3(0, 35, 70));
            camera.attachControl(canvas, true);


            scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
            scene.autoClear = false;
            scene.createDefaultLight(true);
            scene.createDefaultEnvironment({
                createSkybox: false,
                createGround: false,
            });

            try {
                if (model.length === 0) {
                    const result = await BABYLON.SceneLoader.ImportMeshAsync(null, 'models/', 'chair.glb', scene);
                    if (result.meshes) {
                        scene.lights.forEach((light) => {
                            light.dispose();
                        });
                        result.meshes.forEach((mesh) => {
                            if (mesh.name === 'Seat') {
                                fabricMaterialRef.current = mesh.material as BABYLON.PBRBaseMaterial;
                            }
                            if (mesh.name === 'Back') {
                                if (mesh.material) {
                                    mesh.material.alpha = 0.98;
                                }
                            }
                        });
                        model = result.meshes;
                    }
                }
            } catch (error) {
                console.error('Error loading GLB model:', error);
            }

            return scene;
        };

        const initializeScene = async () => {
            const scene = await createScene();

            if (scene) {
                engine.runRenderLoop(() => {
                    model[0]?.rotate(BABYLON.Axis.Y, 0.005, BABYLON.Space.WORLD);
                    scene.render();
                });

                const resizeWindow = () => {
                    engine.resize();
                };

                window.addEventListener('resize', resizeWindow);
                return () => {
                    window.removeEventListener('resize', resizeWindow);
                    engine.dispose();
                };
            }
        };

        void initializeScene();
    }, []);

    const handleColorChange = (color: BABYLON.Color3) => {
        setActiveColor(color);
        if (fabricMaterialRef.current) {
            fabricMaterialRef.current._albedoColor = color;
        }
    };

    return (

        <div className={`${className} flex flex-row`} >
            <canvas id="chairCanvas" className='w-4/5 outline-none' />
            <div className='flex flex-col justify-evenly w-1/5 items-center'>
                {renderColorOption({ color: BABYLON.Color3.White(), activeColor, onClick: handleColorChange })}
                {renderColorOption({ color: new BABYLON.Color3(0, 0, 0), activeColor, onClick: handleColorChange })}
                {renderColorOption({ color: new BABYLON.Color3(0.4, 0.4, 0.4), activeColor, onClick: handleColorChange })}
                {renderColorOption({ color: new BABYLON.Color3(0.9, 0.4, 0.4), activeColor, onClick: handleColorChange })}
                {renderColorOption({ color: new BABYLON.Color3(0.9, 0.9, 0.4), activeColor, onClick: handleColorChange })}
                {renderColorOption({ color: new BABYLON.Color3(0.4, 0.1, 0.9), activeColor, onClick: handleColorChange })}
            </div>
        </div>
    );
};

export default ProductConfiguator;
