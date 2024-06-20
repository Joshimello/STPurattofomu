import ST2 from "$lib/components/models/ST2.svelte"
import type { ComponentType, SvelteComponent } from "svelte"

export const list: Record<string, {id: number, code: string, model?: ComponentType}> = {
  "ST 2": {
    id: 37606,
    code: "2011-022B",
    model: ST2,
  },
  "ST 1": {
    id: 25460,
    code: "1998-049A",
    model: ST2,
  },
  "IRIS-A": {
    id: 51044,
    code: "2022-002BN",
    model: ST2,
  },
  "IDEASSAT": {
    id: 47458,
    code: "2021-006AX",
    model: ST2,
  },
  "YUSAT-1": {
    id: 47439,
    code: "2021-006AC",
    model: ST2,
  },
  "FORMOSAT7-5/COSMIC2-5": {
    id: 44358,
    code: "2019-036V",
    model: ST2,
  },
  "FORMOSAT7-6/COSMIC2-6": {
    id: 44353,
    code: "2019-036Q",
    model: ST2,
  },
  "FORMOSAT7-2/COSMIC2-2": {
    id: 44351,
    code: "2019-036N",
    model: ST2,
  },
  "FORMOSAT7-4/COSMIC2-4": {
    id: 44350,
    code: "2019-036M",
    model: ST2,
  },
  "FORMOSAT7-1/COSMIC2-1": {
    id: 44349,
    code: "2019-036L",
    model: ST2,
  },
  "FORMOSAT7-3/COSMIC2-3": {
    id: 44343,
    code: "2019-036E",
    model: ST2,
  },
  "FORMOSAT-5": {
    id: 42920,
    code: "2017-049A",
    model: ST2,
  },
  "PACE": {
    id: 40022,
    code: "2014-033N",
    model: ST2,
  },
  "FORMOSAT 3F": {
    id: 29052,
    code: "2006-011F",
    model: ST2,
  },
  "FORMOSAT 3E": {
    id: 29051,
    code: "2006-011E",
    model: ST2,
  },
  "FORMOSAT 3D": {
    id: 29050,
    code: "2006-011D",
    model: ST2,
  },
  "FORMOSAT 3C": {
    id: 29049,
    code: "2006-011C",
    model: ST2,
  },
  "FORMOSAT 3B": {
    id: 29048,
    code: "2006-011B",
    model: ST2,
  },
  "FORMOSAT 3A": {
    id: 29047,
    code: "2006-011A",
    model: ST2,
  },
  "ROCSAT 2": {
    id: 28254,
    code: "2004-018A",
    model: ST2,
  },
}