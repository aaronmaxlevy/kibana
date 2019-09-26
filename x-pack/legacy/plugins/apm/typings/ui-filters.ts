/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { LocalUIFilterName } from '../server/lib/ui_filters/local_ui_filters/config';

export type UIFilters = {
  kuery?: string;
  environment?: string;
} & { [key in LocalUIFilterName]?: string[] };
