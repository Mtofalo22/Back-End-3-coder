import { Router } from 'express';
import { getMockPets, getMockUsers, generateData } from '../controllers/mocks.controller.js';

const router = Router();

router.get('/mockingpets', getMockPets);
router.get('/mockingusers', getMockUsers);
router.post('/generate-data', generateData);
  

export default router;