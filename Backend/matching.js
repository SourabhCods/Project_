const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/findMatches', async (req, res) => {
  const { skills } = req.query;

  if (!skills) {
    return res.status(400).send('Skills are required for matching.');
  }

  try {
    const skillsArray = skills.split(',');
    const matches = await User.find({
      skills: { $in: skillsArray }
    });

    res.json(matches);
  } catch (error) {
    res.status(500).send('Error finding matches.');
  }
});

module.exports = router;
