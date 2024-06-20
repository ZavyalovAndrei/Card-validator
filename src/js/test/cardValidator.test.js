import { cardSystem, checkCardNumber } from '../cardValidator';

describe('cardSystem function', () => {
  test('should return "amex" for card number starting with 34 or 37', () => {
    expect(cardSystem('341234567890123')).toBe('amex');
    expect(cardSystem('371234567890123')).toBe('amex');
  });

  test('should return "mastercard" for card number starting with 51-55', () => {
    expect(cardSystem('511234567890123')).toBe('mastercard');
    expect(cardSystem('551234567890123')).toBe('mastercard');
  });

  test('should return "diners_club" for card number starting with 36, 38, 300-305', () => {
    expect(cardSystem('36123456789012')).toBe('diners_club');
    expect(cardSystem('38123456789012')).toBe('diners_club');
    expect(cardSystem('30012345678901')).toBe('diners_club');
    expect(cardSystem('30512345678901')).toBe('diners_club');
  });

  test('should return "mir" for card number starting with 22', () => {
    expect(cardSystem('221234567890123')).toBe('mir');
  });

  test('should return "jbc" for card number starting with 35', () => {
    expect(cardSystem('351234567890123')).toBe('jbc');
  });

  test('should return "visa" for card number starting with 4', () => {
    expect(cardSystem('411234567890123')).toBe('visa');
  });

  test('should return "discover" for card number starting with 6011', () => {
    expect(cardSystem('6011123456789012')).toBe('discover');
  });
});

describe('checkCardNumber function', () => {
    test('should return false for an empty string', () => {
      expect(checkCardNumber('')).toBe(false);
    });
  
    test('should return false for a single digit card number', () => {
      expect(checkCardNumber('1')).toBe(false);
    });
  
    test('should return false for a single digit card number with non-numeric characters', () => {
      expect(checkCardNumber('a')).toBe(false);
    });
  
    test('should return false for a single digit card number with leading zeros', () => {
      expect(checkCardNumber('01')).toBe(false);
    });
  
    test('should return false for a single digit card number that is not a valid credit card number', () => {
      expect(checkCardNumber('5')).toBe(false);
    });
  });