const PortfolioContent =
require("../models/PortfolioContent");

const getContent = async(req,res)=>{

  let content =
  await PortfolioContent.findOne();

  if(!content){

    content =
    await PortfolioContent.create({});

  }

  res.json(content);

};

const updateContent =
async(req,res)=>{

  let content =
  await PortfolioContent.findOne();

  if(!content){

    content =
    await PortfolioContent.create(
      req.body
    );

  }else{

    content =
    await PortfolioContent.findByIdAndUpdate(
      content._id,
      req.body,
      { new:true }
    );

  }

  res.json(content);

};

module.exports = {
  getContent,
  updateContent
};