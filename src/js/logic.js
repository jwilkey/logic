const isPremiseComplete = (premise) => {
  return !!premise.quantifier && !!premise.subject && !!premise.copula && !!premise.predicate
}

const isComplete = (majorPremise, minorPremise, conclusion) => {
  return !!majorPremise &&
    !!minorPremise &&
    !!conclusion &&
    isPremiseComplete(majorPremise) &&
    isPremiseComplete(minorPremise) &&
    isPremiseComplete(conclusion)
}

const validate = (majorPremise, minorPremise, conclusion) => {
  let violations = []
  if (!isComplete(majorPremise, minorPremise, conclusion)) {
    return [{ id: 'INCOMPLETE', label: 'The syllogism is not complete' }]
  }
  if (new Set([majorPremise.subject, majorPremise.predicate, minorPremise.subject, minorPremise.predicate, conclusion.subject, conclusion.predicate]).size !== 3) {
    violations.push({ id: 'THREE_TERMS', label: 'Your argument must have only 3 terms' })
  }
  return violations
}

export default {
  isPremiseComplete,
  isComplete,
  validate
}
