import {Router} from "express";
import {readdirSync} from "fs";

const router = Router();

readdirSync(__dirname).filter( file => {
    const [name, extension] = file.split('.');  // [ 'user', 'js' ]

    if (name !== 'index' && extension === 'js') {
        console.log(`Cargando ruta ${name} - ${file}`);
        import(`./${file}`).then( moduleRouter => {router.use(`/${name}`, moduleRouter.router)})
    }
});

export default router;
