import { CARS_MANUFACTORY } from 'enums'
import { SelectOption } from 'types'

import { bmwModelOptions } from './bmwModelOptions'
import { chevroletModelOptions } from './chevroletModelOptions'
import { fordModelOptions } from './fordModelOptions'

import { hyundayModelOptions } from './hyundayModelOptions'
import { kiaModelOptions } from './kiaModelOptions'
import { lexusModelOptions } from './lexusModelOptions'
import { mercedesBenzModelOptions } from './mercedesBenzModelOptions'
import { opelModelOptions } from './opelModelOptions'
import { tayotaModelOptions } from './tayotaModelOptions'
import { volkswagenModelOptions } from './volkswagenModelOptions'

export const modelOptionsByManufactories: Record<CARS_MANUFACTORY, SelectOption[]> = {
  HYUNDAY: hyundayModelOptions,
  BMW: bmwModelOptions,
  CHEVROLET: chevroletModelOptions,
  FORD: fordModelOptions,
  KIA: kiaModelOptions,
  LEXUS: lexusModelOptions,
  MERCEDES_BENZ: mercedesBenzModelOptions,
  OPEL: opelModelOptions,
  TAYOTA: tayotaModelOptions,
  VOLKSWAGEN: volkswagenModelOptions,
}
