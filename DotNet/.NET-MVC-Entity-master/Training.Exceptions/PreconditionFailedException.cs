﻿using System;

namespace Training.Exceptions
{
    public class PreconditionFailedException : Exception
    {
        public PreconditionFailedException()
            : base(string.Empty)
        {

        }

        public PreconditionFailedException(string message)
            : base(message)
        {

        }

        public PreconditionFailedException(string message, Exception innerException)
            : base(message, innerException)
        {

        }
    }
}
