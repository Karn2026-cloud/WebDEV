const express =
require("express");

const router =
express.Router();

const {

getPlans,
addPlan,
updatePlan,
deletePlan

}
=
require(
"../controllers/pricingController"
);

router.get(
"/",
getPlans
);

router.post(
"/",
addPlan
);

router.put(
"/:id",
updatePlan
);

router.delete(
"/:id",
deletePlan
);

module.exports =
router;