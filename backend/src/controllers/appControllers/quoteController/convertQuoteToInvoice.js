const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');
const Invoice = mongoose.model('Invoice');
const { calculate } = require('@/helpers');

const convertQuoteToInvoice = async (req, res) => {
  try {
    const quoteId = req.params.id;
    const quote = await Quote.findById(quoteId);

    if (!quote) {
      return res.status(404).json({
        success: false,
        message: 'Quote not found',
      });
    }

    const invoiceData = {
      items: quote.items,
      subTotal: quote.subTotal,
      taxTotal: quote.taxTotal,
      total: quote.total,
      taxRate: quote.taxRate,
      discount: quote.discount,
      createdBy: req.admin._id,
      customer: quote.customer,
      currency: quote.currency,
      client: quote.client, // Ensure this field is present in the quote
      expiredDate: new Date(), // Set appropriate expired date
      date: new Date(), // Set appropriate date
      year: new Date().getFullYear(), // Set current year
      number: await generateInvoiceNumber(), // Implement a function to generate invoice number
    };

    const newInvoice = new Invoice(invoiceData);
    const savedInvoice = await newInvoice.save();

    quote.convertedToInvoice = true;
    await quote.save();

    return res.status(200).json({
      success: true,
      result: savedInvoice,
      message: 'Quote converted to invoice successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'An error occurred while converting quote to invoice',
      error: error.message,
    });
  }
};

const generateInvoiceNumber = async () => {
  // Implement logic to generate a unique invoice number
  // This could be based on the last invoice number in the database
  const lastInvoice = await Invoice.findOne().sort({ number: -1 });
  return lastInvoice ? lastInvoice.number + 1 : 1;
};

module.exports = convertQuoteToInvoice;
