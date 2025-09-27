const Service = require('../Models/Service');

// criar um novo serviço
exports.createService = async (req, res) => {
  try {
    const newService = new Service(req.body);
    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// obter todos os serviços
exports.getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// obter um serviço por ID
exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: 'Serviço não encontrado' });
    }
    res.status(200).json(service);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// atualizar um serviço por ID
exports.updateService = async (req, res) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedService) {
      return res.status(404).json({ message: 'Serviço não encontrado' });
    }
    res.status(200).json(updatedService);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// deletar um serviço por ID
exports.deleteService = async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    if (!deletedService) {
      return res.status(404).json({ message: 'Serviço não encontrado' });
    }
    res.status(200).json({ message: 'Serviço deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};