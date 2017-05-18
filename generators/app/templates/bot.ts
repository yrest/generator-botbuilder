import * as builder from 'botbuilder';
import { <%= defaultDialog %> } from './dialogs';

const bot = new builder.UniversalBot(
    new builder.ChatConnector(),
    <%= defaultDialog %>.dialog
);
<%= luisRegistration %>
export default bot;