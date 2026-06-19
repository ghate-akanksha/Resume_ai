const calculateATS = (resumeSkills, jobSkills) => {
  const resumeSet = new Set(resumeSkills.map(s => s.toLowerCase()));
  const jobSet = new Set(jobSkills.map(s => s.toLowerCase()));

  let matched = [];
  let missing = [];

  jobSet.forEach(skill => {
    if (resumeSet.has(skill)) {
      matched.push(skill);
    } else {
      missing.push(skill);
    }
  });

  const score =
    jobSet.size === 0
      ? 0
      : Math.round((matched.length / jobSet.size) * 100);

  return {
    score,
    matchedSkills: matched,
    missingSkills: missing,
  };
};

module.exports = calculateATS;