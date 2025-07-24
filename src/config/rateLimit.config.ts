import rateLimit from 'express-rate-limit';

export const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000, 
  standardHeaders: true,
  legacyHeaders: false,
});


export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10, // 10 lần login/15'
  message: {
    success: false,
    message: 'Too many auth attempts. Please wait a bit.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

